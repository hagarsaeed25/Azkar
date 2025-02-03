document.getElementById("toggle-theme").onclick = () => {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme");
    document.getElementById("toggle-theme").src = "assets/icons/dark.png";
  } else {
    document.body.classList.add("dark-theme");
    document.getElementById("toggle-theme").src = "assets/icons/ligth.png";
  }
};
document.getElementById("toggle-menu").onclick = () => {
  document.getElementById("nav-menu").classList.toggle("open");
};
fetch(`https://www.myjsons.com/v/b7d03829`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let morning = "";
    for (let i = 0; i < data["أذكار الصباح"].length; i++) {
      morning += `
      <li>
      <p><span>${data["أذكار الصباح"][i].content}</span> <span class="count">(${data["أذكار الصباح"][i].count})</span></p>
  </li>`;
    }
    document.getElementById("morning-list").innerHTML = morning;

    let evening = "";
    for (let i = 0; i < data["أذكار المساء"].length; i++) {
      evening += `
    <li>
      <p><span>${data["أذكار المساء"][i].content}</span> <span class="count">(${data["أذكار المساء"][i].count})</span></p>
  </li>`;
}
    document.getElementById("evning-list").innerHTML = evening;

    let afterPrayer = "";
    for (let i = 0; i < data["أذكار بعد السلام من الصلاة المفروضة"].length; i++) {
      afterPrayer += `
  <li><p><span>${data["أذكار بعد السلام من الصلاة المفروضة"][i].content}</span><span class="count">(${data["أذكار بعد السلام من الصلاة المفروضة"][i].count})</span></p></li>
        `;
    }
    document.getElementById("after-prayer-remembrances").innerHTML = afterPrayer;

    let rosaries = "";
    for (let i = 0; i < data["تسابيح"].length; i++) {
      rosaries += `
          <li><p><span>${data["تسابيح"][i].content}</span> <span class="count">(${data["تسابيح"][i].count})</span></p></li>
        `;
    }
    document.getElementById("rosaries-list").innerHTML = rosaries;

    let sleeping ="";
    for(let i = 0;i<data["أذكار النوم"].length; i++){
        sleeping +=`
            <li><p><span>${data["أذكار النوم"][i].content}</span><span class="count">(${data["أذكار النوم"][i].count})</span></p></li>
        `
    }
    document.getElementById("sleeping-list").innerHTML = sleeping;
    
    let wakeUp ="";
    for(let i = 0;i<data["أذكار الاستيقاظ"].length; i++){
        wakeUp +=`
            <li><p><span>${data["أذكار الاستيقاظ"][i].content}</span><span class="count">(${data["أذكار الاستيقاظ"][i].count})</span></p></li>
        `
    }
    document.getElementById("wake-up-list").innerHTML = wakeUp;
    
    let quranSupplications ="";
    for(let i = 0;i<data["أدعية قرآنية"].length; i++){
        quranSupplications +=`
            <li><p><span>${data["أدعية قرآنية"][i].content}</span><span class="count">(${data["أدعية قرآنية"][i].count})</span></p></li>
        `
    }
    document.getElementById("quranic-list").innerHTML = quranSupplications;
    
    let prophetsSupplications ="";
    for(let i = 0;i<data["أدعية الأنبياء"].length; i++){
        prophetsSupplications +=`
            <li><p><span>${data["أدعية الأنبياء"][i].content}</span><span class="count">(${data["أدعية الأنبياء"][i].count})</span></p></li>
        `
    }
    document.getElementById("supplications-list").innerHTML = prophetsSupplications;
    
  });
