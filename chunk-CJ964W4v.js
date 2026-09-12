import{Bn as rv,Ct as U_,H as Ld,K as MV,Kn as v_,Lt as Xb,Mn as or,Nn as p,Pt as Wn,Tt as Ub,Vn as t_,W as M,Wn as uy,X as N_,Xt as av,_ as Ca,b as D,bt as TV,en as bb,ft as Qr,hn as iv,ir as zS,j as Hd,jt as Vd,kt as Va,m as Bd,o as Ad,on as e_,p as Bb,st as Pn,u as BI,un as gv,vn as jg,wn as lv,x as D_,z as L,zn as r_}from"./chunk-DkyeJLxd.js";import{A as fn,E as cs,H as yn,I as mn,M as gs,R as q,U as ys,c as Ii,g as St,j as gn}from"./chunk-OUwCDpcx.js";var ee=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`;var ie=[`content`];var ae=[`header`];var oe=[`title`];var re=[`subtitle`];var le=[`footer`];var de=[`*`,[[`p-header`]],[[`p-footer`]]];var ce=[`*`,`p-header`,`p-footer`];function pe(t,r){t&1&&lv(0)}function se(t,r){if(t&1&&(Ca(0,`div`,1),t_(1,1),iv(2,pe,1,0,`ng-container`,2),Ld()),t&2){let e=Xb();D_(e.cx(`header`)),av(`pBind`,e.ptm(`header`)),BI(2),av(`ngTemplateOutlet`,e.headerTemplate||e._headerTemplate)}}function me(t,r){if(t&1&&N_(0),t&2)Hd(` `,Xb(2).header(),` `)}function ue(t,r){t&1&&lv(0)}function fe(t,r){if(t&1&&(Ca(0,`div`,1),Ub(1,me,1,1),iv(2,ue,1,0,`ng-container`,2),Ld()),t&2){let e=Xb();D_(e.cx(`title`)),av(`pBind`,e.ptm(`title`)),BI(),Bb(e.header()&&!e._titleTemplate&&!e.titleTemplate?1:-1),BI(),av(`ngTemplateOutlet`,e.titleTemplate||e._titleTemplate)}}function _e(t,r){if(t&1&&N_(0),t&2)Hd(` `,Xb(2).subheader(),` `)}function he(t,r){t&1&&lv(0)}function ye(t,r){if(t&1&&(Ca(0,`div`,1),Ub(1,_e,1,1),iv(2,he,1,0,`ng-container`,2),Ld()),t&2){let e=Xb();D_(e.cx(`subtitle`)),av(`pBind`,e.ptm(`subtitle`)),BI(),Bb(e.subheader()&&!e._subtitleTemplate&&!e.subtitleTemplate?1:-1),BI(),av(`ngTemplateOutlet`,e.subtitleTemplate||e._subtitleTemplate)}}function Te(t,r){t&1&&lv(0)}function ge(t,r){t&1&&lv(0)}function be(t,r){if(t&1&&(Ca(0,`div`,1),t_(1,2),iv(2,ge,1,0,`ng-container`,2),Ld()),t&2){let e=Xb();D_(e.cx(`footer`)),av(`pBind`,e.ptm(`footer`)),BI(2),av(`ngTemplateOutlet`,e.footerTemplate||e._footerTemplate)}}var ve=`
    ${ee}

    .p-card {
        display: block;
    }
`;var Ce={root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`};var te=(()=>{class t extends q{name=`card`;style=ve;classes=Ce;static ɵfac=(()=>{let e;return function(n){return(e||(e=jg(t)))(n||t)}})();static ɵprov=M({token:t,factory:t.ɵfac})}return t})();var ne=new D(`CARD_INSTANCE`);var Me=(()=>{class t extends cs{componentName=`Card`;$pcCard=p(ne,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(gs,{self:!0});_componentStyle=p(te);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}header=or();subheader=or();style=or();styleClass=or();headerFacet=TV(fn);footerFacet=TV(mn);headerTemplate;titleTemplate;subtitleTemplate;contentTemplate=TV(`content`,{descendants:!1});footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=L(null);constructor(){super(),Wn(()=>{let e=this.style();St(this._style(),e)||(this._style.set(e),this.el?.nativeElement&&e&&Object.keys(e).forEach(i=>{this.el.nativeElement.style[i]=e[i]}))})}getBlockableElement(){return this.el.nativeElement}templates=MV(gn);onAfterContentInit(){this.templates().forEach(e=>{switch(e.getType()){case`header`:this._headerTemplate=e.template;break;case`title`:this._titleTemplate=e.template;break;case`subtitle`:this._subtitleTemplate=e.template;break;case`content`:this._contentTemplate=e.template;break;case`footer`:this._footerTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static ɵfac=function(i){return new(i||t)};static ɵcmp=Ad({type:t,selectors:[[`p-card`]],contentQueries:function(i,n,l){if(i&1&&(gv(l,n.headerFacet,fn,5)(l,n.footerFacet,mn,5)(l,n.contentTemplate,ie,4)(l,n.templates,gn,4),Va(l,ae,4)(l,oe,4)(l,re,4)(l,le,4)),i&2){r_(4);let d;Bd(d=Vd())&&(n.headerTemplate=d.first),Bd(d=Vd())&&(n.titleTemplate=d.first),Bd(d=Vd())&&(n.subtitleTemplate=d.first),Bd(d=Vd())&&(n.footerTemplate=d.first)}},hostVars:4,hostBindings:function(i,n){i&2&&(v_(n._style()),D_(n.cn(n.cx(`root`),n.styleClass())))},inputs:{header:[1,`header`],subheader:[1,`subheader`],style:[1,`style`],styleClass:[1,`styleClass`]},features:[U_([te,{provide:ne,useExisting:t},{provide:Ii,useExisting:t}]),bb([gs]),rv],ngContentSelectors:ce,decls:8,vars:11,consts:[[3,`pBind`,`class`],[3,`pBind`],[4,`ngTemplateOutlet`]],template:function(i,n){i&1&&(e_(de),Ub(0,se,3,4,`div`,0),Ca(1,`div`,1),Ub(2,fe,3,5,`div`,0),Ub(3,ye,3,5,`div`,0),Ca(4,`div`,1),t_(5),iv(6,Te,1,0,`ng-container`,2),Ld(),Ub(7,be,3,4,`div`,0),Ld()),i&2&&(Bb(n.headerFacet()||n.headerTemplate||n._headerTemplate?0:-1),BI(),D_(n.cx(`body`)),av(`pBind`,n.ptm(`body`)),BI(),Bb(n.header()||n.titleTemplate||n._titleTemplate?2:-1),BI(),Bb(n.subheader()||n.subtitleTemplate||n._subtitleTemplate?3:-1),BI(),D_(n.cx(`content`)),av(`pBind`,n.ptm(`content`)),BI(2),av(`ngTemplateOutlet`,n.contentTemplate()||n._contentTemplate),BI(),Bb(n.footerFacet()||n.footerTemplate||n._footerTemplate?7:-1))},dependencies:[uy,zS,yn,ys,gs],encapsulation:2})}return t})();var Ve=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=Qr({type:t});static ɵinj=Pn({imports:[Me,yn,ys,yn,ys]})}return t})();export{Ve as n,Me as t};