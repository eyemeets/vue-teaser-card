import{_ as k}from"./index-CxDNSYh4.js";import"./vue.esm-bundler-DgqL0lbe.js";var t=(e=>(e.WithNumberHighlight="withNumberHighlight",e.MediaFeatured="mediaFeatured",e.TextEmphasis="textEmphasis",e.LargeMedia="largeMedia",e))(t||{});const s=[{title:"Porteføljeforvalterens tips til hvordan du unngår «fomo» i aksjemarkedet",maxTitleChar:30,labels:["Topic","Abonnent"],maxIngressChar:120,enableMaxChar:!0,numberBadge:4,width:100,paddingY:12,paddingX:10,variant:t.WithNumberHighlight},{title:"Nedgang på Oslo Børs før kveldens rentebeskjed fra USA",maxTitleChar:30,ingress:"Konkurransetilsynet:",labels:["Finans"],maxIngressChar:120,enableMaxChar:!0,mediaSrc:"/src/assets/teaser-image-2.webp",width:125,paddingY:3,paddingX:3,variant:t.MediaFeatured},{title:"Slik unngår IT-avdelingen å bli stående på perrongen når ledelsen tar digitalt ekspresstog inn i fremtiden.",maxTitleChar:30,ingress:"Doblet på en måned",labels:["Annonse","Entur"],mediaSrc:"/src/assets/teaser-image-3.webp",maxIngressChar:120,enableMaxChar:!0,width:125,paddingY:3,paddingX:3,variant:t.TextEmphasis},{title:"Equinor har tapt over 200 milliarder kroner",ingress:"Equinor har nå gitt oppsine eierandeler i fire russiske selskaper til Rosneft etter tre måneders arbeid og mer enn ti milliærder kroner i nedskrivninger.",labels:["Dokumentar"],mediaSrc:"/src/assets/teaser-image-4.webp",width:125,variant:t.LargeMedia}].map((e,a)=>({id:`dn-card-${a}`,...e})),v={title:"Components/TeaserCard",component:k,argTypes:{variant:{control:{type:"select",options:["withNumberHighlight","mediaFeatured","textEmphasis","largeMedia"]}},onActionMedia:{action:"actionMedia"},onActionContent:{action:"actionContent"}}},d=e=>({components:{TeaserCard:k},setup(){return{args:e}},template:`
    <TeaserCard
      v-bind="args"
      @actionMedia="onActionMedia"
      @actionContent="onActionContent"
    />
  `,methods:{onActionMedia:a=>{console.log("Media clicked:",a)},onActionContent:a=>{console.log("Content clicked:",a)}}}),n=d.bind({});n.args={...s[0]};const o=d.bind({});o.args={...s[1]};const r=d.bind({});r.args={...s[2]};const i=d.bind({});i.args={...s[3]};var c,l,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    TeaserCard
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <TeaserCard
      v-bind="args"
      @actionMedia="onActionMedia"
      @actionContent="onActionContent"
    />
  \`,
  methods: {
    onActionMedia: (payload: ActionPayload) => {
      console.log('Media clicked:', payload);
    },
    onActionContent: (payload: ActionPayload) => {
      console.log('Content clicked:', payload);
    }
  }
})`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var g,m,u;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
  components: {
    TeaserCard
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <TeaserCard
      v-bind="args"
      @actionMedia="onActionMedia"
      @actionContent="onActionContent"
    />
  \`,
  methods: {
    onActionMedia: (payload: ActionPayload) => {
      console.log('Media clicked:', payload);
    },
    onActionContent: (payload: ActionPayload) => {
      console.log('Content clicked:', payload);
    }
  }
})`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,C,M;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  components: {
    TeaserCard
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <TeaserCard
      v-bind="args"
      @actionMedia="onActionMedia"
      @actionContent="onActionContent"
    />
  \`,
  methods: {
    onActionMedia: (payload: ActionPayload) => {
      console.log('Media clicked:', payload);
    },
    onActionContent: (payload: ActionPayload) => {
      console.log('Content clicked:', payload);
    }
  }
})`,...(M=(C=r.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var A,b,y;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
  components: {
    TeaserCard
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <TeaserCard
      v-bind="args"
      @actionMedia="onActionMedia"
      @actionContent="onActionContent"
    />
  \`,
  methods: {
    onActionMedia: (payload: ActionPayload) => {
      console.log('Media clicked:', payload);
    },
    onActionContent: (payload: ActionPayload) => {
      console.log('Content clicked:', payload);
    }
  }
})`,...(y=(b=i.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const f=["WithNumberHighlight","MediaFeatured","TextEmphasis","LargeMedia"];export{i as LargeMedia,o as MediaFeatured,r as TextEmphasis,n as WithNumberHighlight,f as __namedExportsOrder,v as default};
