import React, { useEffect } from "react";

function MicroFrontend({ name, host, history }) {
  async function getScript(scriptId,next){
    const response = await fetch(`${host}/asset-manifest.json`);
    const manifest = await response.json();
    const script = document.createElement("script");
    script.id = scriptId;
    script.crossOrigin = "";
    script.src = `${host}${manifest.files["main.js"]}`;
    script.onload = () => {
      setTimeout(()=>{
        next();
      },3000)
    };
    document.head.appendChild(script);
  }

  useEffect(() => {
    const scriptId = `micro-frontend-script-${name}`;

    const renderMicroFrontend = () => {
      window[`render${name}`](`${name}-container`, history);
    };

    if (document.getElementById(scriptId)) {
      renderMicroFrontend();
      return;
    }
    getScript(scriptId,renderMicroFrontend);
    
    return () => {
      window[`unmount${name}`] && window[`unmount${name}`](`${name}-container`);
    };
  });

  return (<main id={`${name}-container`} />);
}

MicroFrontend.defaultProps = {
  document,
  window,
};

export default MicroFrontend;