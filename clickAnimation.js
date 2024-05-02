document.getElementById("scale1").addEventListener("click", () => {
  clickScaleIn("scale1");
});

document.getElementById("scale2").addEventListener("click", () => {
  clickScaleIn2("scale2");
});

function clickScaleIn(name) {
  const animation = document.getElementById(name).animate(
    [
      //キーフレーム
      {transform: 'scale(1)'},
      {transform: 'scale(2)'}
    ],    
    {
      //タイミングオプション
      duration: 1000,
      fill: "forwards"
    }
  );
}


function clickScaleIn2(name) {
  document.getElementById(name).classList.remove("scaleIn");

  setTimeout(() => {
    document.getElementById(name).classList.add("scaleIn");
  },1);
}
