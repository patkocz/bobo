export default function isAsyncAvailable() {
  try {
    eval("(function() { async _ => _; })();");
  } catch (e) {
    return false;
  }

  return true;
}
