export const inject = (string: string) => {
  if (typeof document !== "undefined") {
    const style = document.createElement("style");
    style.dataset["source"] = "blinkcss";
    style.textContent = string;
    document.head.insertAdjacentElement("beforeend", style);
  }
};
