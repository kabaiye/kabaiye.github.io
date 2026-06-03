(function () {
    const API_BASE = "https://qxii.cn/bushu/api.php";
    const USER_STORAGE_KEY = "heihe_user_info";
    const RECORDS_STORAGE_KEY = "heihe_records";

    const account = document.getElementById("account");
    const password = document.getElementById("password");
    const remember = document.getElementById("remember");
    const steps = document.getElementById("steps");
    const submitBtn = document.getElementById("submit-btn");
    const recordsList = document.getElementById("records-list");
    const loadingMask = document.getElementById("loading-mask");

    function getTodayStr() {
        const d = new Date();
        return (
            d.getFullYear() +
            "-" +
            ("0" + (d.getMonth() + 1)).slice(-2) +
            "-" +
            ("0" + d.getDate()).slice(-2)
        );
    }

    function changeStep(delta) {
        steps.value = Math.max(0, Number(steps.value || 0) + delta);
    }

    function saveRecord(stepsVal) {
        const today = getTodayStr();
        let records = JSON.parse(localStorage.getItem(RECORDS_STORAGE_KEY) || "[]");
        records = records.filter((r) => r.date !== today);
        records.unshift({ date: today, steps: stepsVal });
        records = records.slice(0, 10);
        localStorage.setItem(RECORDS_STORAGE_KEY, JSON.stringify(records));
    }

    function renderRecords() {
        const records = JSON.parse(localStorage.getItem(RECORDS_STORAGE_KEY) || "[]");
        if (!records.length) {
            recordsList.innerHTML = '<p class="hint">暂无本地提交记录</p>';
            return;
        }
        recordsList.innerHTML = records
            .map(
                (r) =>
                    `<div class="record-item"><span>${r.date}</span><span>${r.steps} kcal</span></div>`
            )
            .join("");
    }

    function setLoading(on) {
        loadingMask.style.display = on ? "flex" : "none";
        submitBtn.disabled = on;
        submitBtn.textContent = on ? "提交中…" : "提交今日记录";
    }

    async function submitRecord() {
        const accountVal = account.value.trim();
        const passwordVal = password.value.trim();
        const stepsVal = Number(steps.value);

        if (!accountVal || !passwordVal) {
            alert("请输入账号和密码");
            return;
        }
        if (!Number.isFinite(stepsVal) || stepsVal < 0) {
            alert("请输入有效的热量值");
            return;
        }

        if (remember.checked) {
            localStorage.setItem(
                USER_STORAGE_KEY,
                JSON.stringify({
                    account: accountVal,
                    password: passwordVal,
                    steps: stepsVal,
                })
            );
        } else {
            localStorage.removeItem(USER_STORAGE_KEY);
        }

        const url =
            API_BASE +
            "?" +
            new URLSearchParams({
                username: accountVal,
                password: passwordVal,
                steps: String(stepsVal),
            });

        setLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            alert(data.message || "提交成功");
            if (res.ok) {
                saveRecord(stepsVal);
                renderRecords();
            }
        } catch {
            alert("提交失败，请检查网络或稍后再试");
        } finally {
            setLoading(false);
        }
    }

    window.changeStep = changeStep;
    window.submitRecord = submitRecord;

    const saved = JSON.parse(localStorage.getItem(USER_STORAGE_KEY) || "null");
    if (saved) {
        account.value = saved.account || "";
        password.value = saved.password || "";
        if (saved.steps != null) steps.value = saved.steps;
        remember.checked = true;
    }

    renderRecords();
})();
