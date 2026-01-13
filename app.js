// ===== Helpers =====
function toast(msg){
  const t = document.getElementById("toast");
  if(!t){ alert(msg); return; }
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(()=>t.classList.remove("show"), 1800);
}

// ===== Bottom nav active =====
(function(){
  const page = document.body.dataset.page;
  document.querySelectorAll(".nav-item").forEach(a=>{
    if(a.dataset.page === page) a.classList.add("active");
  });
})();

// ===== Keys logic (localStorage) =====
function getSavedKey(){
  return localStorage.getItem("pl_key") || "";
}
function saveKey(key){
  localStorage.setItem("pl_key", key);
}
function clearKey(){
  localStorage.removeItem("pl_key");
}

// ===== Buttons =====
function goBuy(){
  window.location.href = "https://daniilivanishchev.gumroad.com/l/keyprojectleoprivate";
}
function goActivate(){
  window.location.href = "activate.html";
}
function showFreeKeys(){
  // Можно потом заменить на выдачу/генерацию
  toast("Бесплатные ключи: скоро (в разработке)");
}

// ===== Activate page =====
function activateKey(){
  const input = document.getElementById("keyInput");
  if(!input) return;

  const key = input.value.trim();
  if(!key){
    toast("Введите ключ");
    return;
  }

  // строгая логика: сохраняем строку целиком (ny_2026 != ny)
  saveKey(key);
  toast("Ключ активирован ✅");

  const status = document.getElementById("keyStatus");
  if(status) status.textContent = "Текущий ключ: " + key;
}

function fillCurrentKey(){
  const status = document.getElementById("keyStatus");
  const cur = getSavedKey();
  if(status){
    status.textContent = cur ? ("Текущий ключ: " + cur) : "Ключ не активирован";
  }
}

// auto init for activate page
document.addEventListener("DOMContentLoaded", ()=>{
  fillCurrentKey();
});
