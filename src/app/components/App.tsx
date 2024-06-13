import React from "react";
import "../styles/global.css";

function App() {
  const widthRef = React.useRef<HTMLInputElement>(undefined);
  const heightRef = React.useRef<HTMLInputElement>(undefined);
  const colorRef = React.useRef<HTMLInputElement>(undefined);
  const countRef = React.useRef<HTMLInputElement>(undefined);

  const onCreate = () => {
    const width = parseInt(widthRef.current.value, 10);
    const height = parseInt(heightRef?.current?.value, 10) || width;
    const color = colorRef.current.value || "#ffffff";
    const count = parseInt(countRef.current.value, 10);

    parent.postMessage({ pluginMessage: { type: "create-rectangles", mode: "square", options: { width, height, count, color } } }, "*");
  };

  const onCancel = () => {
    parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
  };

  React.useEffect(() => {
    // This is how we read messages sent from the plugin controller
    window.onmessage = (event) => {
      const { type, message } = event.data.pluginMessage;
      if (type === "create-rectangles") {
        console.log(`Figma Says: ${message}`);
      }
    };
  }, []);

  return (
    <div className="flex w-full grow justify-center items-center">
      <div className="flex flex-col w-full items-start p-4 md:p-6">
        <h2 className="text-xs text-neutral-400 font-semibold uppercase">Esoteric Tool Co.</h2>
        <h1 className="inline-flex items-center text-2xl font-semibold mb-2 tracking-tight leading-none">
          Rectangle Studio
          <span className="text-white text-lg tracking-normal px-2 py-1 ml-1.5 rounded-lg bg-gradient-to-br from-blue-400 to-indigo-600 leading-none">Pro</span>
        </h1>
        <div className="flex flex-col w-full p-2 mb-2 bg-neutral-50 border border-neutral-200 rounded-lg">
          <div className="flex w-full first:pt-0 pt-2 last:pb-0 pb-2 last:border-none border-b border-neutral-200">
            <label htmlFor="count" className="text-sm mr-2">Size</label>
            <p className="inline-flex grow text-sm">
              <input id="count" ref={widthRef} className="inline-flex grow text-right outline-none bg-transparent" defaultValue={100} />
              <span className="text-neutral-400 ml-1">px</span>
            </p>
          </div>
          <div className="flex w-full first:pt-0 pt-2 last:pb-0 pb-2 last:border-none border-b border-neutral-200">
            <label htmlFor="count" className="text-sm mr-2">Color</label>
            <p className="inline-flex grow justify-end text-sm">
              <input id="count" ref={colorRef} type="color" className="text-right outline-none" defaultValue="#ffffff" />
            </p>
          </div>
          <div className="flex w-full first:pt-0 pt-2 last:pb-0 pb-2 last:border-none border-b border-neutral-200">
            <label htmlFor="count" className="text-sm mr-2">Count</label>
            <p className="inline-flex grow text-sm">
              <input id="count" ref={countRef} className="inline-flex grow text-right outline-none bg-transparent" defaultValue={1} />
            </p>
          </div>
        </div>
        <div className="flex w-full justify-end gap-2 mb-4">
          <button id="create" className="px-2 py-0.5 rounded-lg bg-neutral-200" onClick={onCancel}>
            <span className="text-base text-black font-medium">
              Cancel
            </span>
          </button>
          <button id="create" className="px-2 py-0.5 rounded-lg bg-neutral-800" onClick={onCreate}>
            <span className="text-base text-white font-medium">
              Create
            </span>
          </button>
        </div>
        <footer className="flex w-full justify-self-end justify-end">
          <p className="text-sm text-neutral-400">
            Alpha v0.0.0 
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
