(function () {
    function getScriptConfig() {
      // Find the current script tag
      const scripts = document.getElementsByTagName('script');
      const currentScript = scripts[scripts.length - 1]; // fallback if currentScript is null
      const configAttr = currentScript.getAttribute("data-config");
      if (!configAttr) return null;
  
      try {
        return JSON.parse(configAttr);
      } catch (e) {
        console.error("Invalid widget config JSON:", e);
        return null;
      }
    }
  
    function createStyles() {
      const style = document.createElement("style");
      style.textContent = `
        .my-widget-box {
          position: fixed;
          z-index: 9999;
          display: none;
          background: #fff;
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
          border-radius: 8px;
          padding: 16px;
          max-width: 100%;
        }
        .my-widget-close {
          position: absolute;
          top: 8px;
          right: 12px;
          font-weight: bold;
          cursor: pointer;
        }
        .my-widget-content input {
          display: block;
          margin: 8px 0;
          padding: 6px;
          width: 100%;
        }
      `;
      document.head.appendChild(style);
    }
  
    function renderWidget(config) {
      if (!config) return;
  
      const isMobile = window.innerWidth <= 768;
      if ((isMobile && config.disableOn === "mobile") || (!isMobile && config.disableOn === "desktop")) return;
  
      const widget = document.createElement("div");
      widget.className = "my-widget-box";
  
      Object.assign(widget.style, {
        fontFamily: config.appearance.fontFamily,
        fontSize: config.appearance.fontSize,
        backgroundColor: config.appearance.bgColor
      });
  
      if (config.position !== "bottom-full") {
        widget.style.width = config.appearance.width;
      }
  
      switch (config.position) {
        case "right-full":
          Object.assign(widget.style, { right: "0", top: "0", height: "100%" });
          break;
        case "right-bottom":
          Object.assign(widget.style, { right: "0", bottom: "0" });
          break;
        case "bottom-full":
          Object.assign(widget.style, { left: "0", bottom: "0", width: "100%" });
          break;
        case "center":
          Object.assign(widget.style, {
            top: "50%", left: "50%", transform: "translate(-50%, -50%)"
          });
          break;
      }
  
      const closeBtn = document.createElement("div");
      closeBtn.className = "my-widget-close";
      closeBtn.textContent = "✕";
      closeBtn.onclick = () => widget.remove();
  
      const content = document.createElement("div");
      content.className = "my-widget-content";
  
      let html = `<h3>${config.content.title}</h3><p>${config.content.description}</p>`;
      config.content.formFields.forEach(field => {
        html += `<label>${field.label}</label><input type="${field.type}" name="${field.name}">`;
      });
      html += `<button>${config.content.buttonText}</button>`;
      content.innerHTML = html;
  
      widget.appendChild(closeBtn);
      widget.appendChild(content);
      document.body.appendChild(widget);
      widget.style.display = "block";
    }
  
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => {
        createStyles();
        renderWidget(getScriptConfig());
      });
    } else {
      createStyles();
      renderWidget(getScriptConfig());
    }
  })();
  