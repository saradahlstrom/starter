import{d as r,R as n,b as c,c as h,B as o,Z as d,G as l,m as u,$ as f}from"./entry.lXTnLjb-.js";const g=["src","alt","width","height"],p=r({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const t=e,i=n(()=>{var a;if((a=t.src)!=null&&a.startsWith("/")&&!t.src.startsWith("//")){const s=d(l(u().app.baseURL));if(s!=="/"&&!t.src.startsWith(s))return f(s,t.src)}return t.src});return(a,s)=>(c(),h("img",{src:o(i),alt:e.alt,width:e.width,height:e.height},null,8,g))}});export{p as default};
