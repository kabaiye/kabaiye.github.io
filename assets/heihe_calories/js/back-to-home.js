(function () {
    const isHome =
        window.location.pathname === "/index.html" ||
        window.location.pathname === "/";
    if (isHome) return;

    const backButton = document.createElement("a");
    backButton.href = "/";
    backButton.textContent = "返回首页";
    backButton.className = "back-to-home";

    const style = `
        position: fixed;
        top: 24px;
        left: 24px;
        padding: 10px 16px;
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.6);
        border-radius: 16px;
        color: #2c3e50;
        font-size: 15px;
        font-weight: 500;
        text-decoration: none;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 9999;
        display: flex;
        align-items: center;
        gap: 6px;
        white-space: nowrap;
        cursor: pointer;
        font-family: inherit;
    `;

    backButton.setAttribute("style", style);

    const mobileStyle = document.createElement("style");
    mobileStyle.textContent = `
        @media (max-width: 768px) {
            a.back-to-home {
                top: 8px !important;
                left: 8px !important;
                padding: 5px 10px !important;
                font-size: 12px !important;
                border-radius: 10px !important;
            }
        }
    `;
    document.head.appendChild(mobileStyle);

    const icon = document.createElement("span");
    icon.innerHTML = "←";
    icon.style.fontSize = "18px";
    backButton.prepend(icon);

    document.body.insertBefore(backButton, document.body.firstChild);
})();
