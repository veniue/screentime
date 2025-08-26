// 随机生成应用和时间
const apps = ["微信", "微博", "抖音", "B站", "知乎", "小红书", "QQ", "淘宝"];
const appList = document.getElementById("appList");

function getRandomTime() {
  const hours = Math.floor(Math.random() * 3); // 0-2小时
  const minutes = Math.floor(Math.random() * 60);
  return `${hours}小时${minutes}分钟`;
}

function generateData() {
  // 今天总时长
  const totalMinutes = Math.floor(Math.random() * 400) + 30; 
  const totalHours = Math.floor(totalMinutes / 60);
  const remainMinutes = totalMinutes % 60;
  document.getElementById("totalTime").textContent = `${totalHours}小时${remainMinutes}分钟`;

  // 较上周
  const compare = Math.floor(Math.random() * 40 - 20); // -20% ~ +20%
  document.getElementById("compare").textContent = `${compare > 0 ? "+" : ""}${compare}%`;

  // 日均
  const avg = Math.floor(totalMinutes / 7);
  document.getElementById("avgTime").textContent = `${Math.floor(avg / 60)}小时${avg % 60}分钟`;

  // 应用列表
  appList.innerHTML = "";
  const selectedApps = apps.sort(() => 0.5 - Math.random()).slice(0, 4);
  selectedApps.forEach(app => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${app}</span><span>${getRandomTime()}</span>`;
    appList.appendChild(li);
  });
}

generateData();
