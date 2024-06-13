import { hexToRgb } from "../app/util/color";

figma.showUI(__html__, { width: 300, height: 273 });

figma.ui.onmessage = (msg) => {
  if (msg.type === "create-rectangles") {
    const nodes = [];

    for (let i = 0; i < msg.options.count; i++) {
      // initialize rectangle
      const rect = figma.createRectangle();

      // set size
      if (msg.mode === "square") {
        rect.resize(msg.options.width ?? 100, msg.options.width ?? 100);
      } else {
        rect.resize(msg.options.width ?? 100, msg.options.height ?? 100);
      }

      // set position
      rect.x = (msg.options.width + 20) * i;

      // set color
      rect.fills = [{ type: "SOLID", color: hexToRgb(msg.options.color) }];

      // add rectangle to the page
      figma.currentPage.appendChild(rect);
      nodes.push(rect);
    }

    // select all rectangles and zoom to fit
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);

    // This is how figma responds back to the ui
    figma.ui.postMessage({
      type: "create-rectangles",
      message: `Created ${msg.count} Rectangles`,
    });
  }

  figma.closePlugin();
};
