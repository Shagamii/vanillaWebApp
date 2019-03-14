import quicklink from "quicklink";

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", quicklink);
} else {
  quicklink();
}
