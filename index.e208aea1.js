!function(){const t={daysEl:document.querySelector('[data-value= "days"]'),hoursEl:document.querySelector('[data-value= "hours"]'),minsEl:document.querySelector('[data-value= "mins"]'),secsEl:document.querySelector('[data-value= "secs"]')};function e({days:e,hours:s,mins:a,secs:o}){t.daysEl.textContent=`${e}`,t.hoursEl.textContent=`${s}`,t.minsEl.textContent=`${a}`,t.secsEl.textContent=`${o}`}new class{start(){e(this.getTimeComponents(this.getTime())),setInterval((()=>{e(this.getTimeComponents(this.getTime()))}),1e3)}getTime(){const t=Date.now();return this.targetDate-t}pad(t){return String(t).padStart(2,"0")}getTimeComponents(t){return{days:this.pad(Math.floor(t/864e5)),hours:this.pad(Math.floor(t%864e5/36e5)),mins:this.pad(Math.floor(t%36e5/6e4)),secs:this.pad(Math.floor(t%6e4/1e3))}}constructor({selector:t,targetDate:e}){this.selector=t,this.targetDate=e}}({selector:"#timer-1",targetDate:new Date("Nov 1, 2022")}).start()}();
//# sourceMappingURL=index.e208aea1.js.map
