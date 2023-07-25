import{_ as t,o as n,c as r,z as e}from"./chunks/framework.3938e08f.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"front-end/js/监听.md","filePath":"front-end/js/监听.md"}'),s={name:"front-end/js/监听.md"},o=e("pre",null,[e("code",null,`    // 选择你要监听的 <div> 元素
    // const targetDiv = this.$refs.filterViewShow.$el;
    // // 创建 MutationObserver 实例，并指定回调函数
    // const observer = new MutationObserver((mutationsList, observer) => {
    //   // 在这里处理元素高度变化的逻辑
    //   // 可以通过 targetDiv.offsetHeight 获取元素的当前高度
    //   console.log('Div height changed:', targetDiv.offsetHeight);
    // });

    // 配置 MutationObserver 的选项
    // const config = {
    //   attributes: true, // 监听属性的变化（可选）
    //   attributeFilter: ['style'], // 监听指定属性的变化（可选）
    //   childList: false, // 不监听子节点的变化
    //   subtree: false // 不监听后代节点的变化
    // };

    // 开始观察目标元素
    // observer.observe(targetDiv, config);
    // observer.observe(targetDiv);

    // 停止观察目标元素
    // observer.disconnect();
    const targetDiv = this.$refs.filterViewShowfilterViewShow;
      
    // 创建一个观察器实例
    const observer = new ResizeObserver((entries) => {
      console.log('---- entries :', entries);
      
      for (let entry of entries) {
        // 当目标元素的高度发生变化时执行的操作
        const newHeight = entry.contentRect.height;
        console.log('新的高度:', newHeight);
      
      // 在这里执行其他逻辑或操作...
      }
    });

    // 开始观察目标元素
    observer.observe(targetDiv);
`)],-1),i=[o];function a(c,l,f,v,d,h){return n(),r("div",null,i)}const _=t(s,[["render",a]]);export{b as __pageData,_ as default};
