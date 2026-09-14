const fonts=[
 {name:"Apple SD Gothic Neo",type:"SYSTEM",sample:"아이폰에서 가장 자연스럽게"},
 {name:"Noto Sans KR",type:"KOREAN",sample:"깔끔하고 읽기 편한 한글"},
 {name:"SF Pro Display",type:"LATIN",sample:"Designed for iPhone"},
 {name:"Pretendard",type:"KOREAN",sample:"모바일 UI에 잘 어울리는 글꼴"},
 {name:"NanumSquare",type:"KOREAN",sample:"단정하고 또렷한 느낌"},
 {name:"SUIT",type:"KOREAN",sample:"Modern Korean typography"}
];
const grid=document.querySelector('#grid'),search=document.querySelector('#search'),count=document.querySelector('#count');
function render(q=''){const list=fonts.filter(f=>(f.name+' '+f.type).toLowerCase().includes(q.toLowerCase()));count.textContent=`${list.length} fonts`;grid.innerHTML=list.length?list.map(f=>`<article class="card"><div><span class="tag">${f.type}</span><h3>${f.name}</h3><div class="meta">iPhone / iPad</div></div><div class="sample">${f.sample}</div></article>`).join(''):`<div class="empty">검색 결과가 없습니다.</div>`}
search.addEventListener('input',e=>render(e.target.value));render();
