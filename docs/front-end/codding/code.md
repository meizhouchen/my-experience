```js
    setList: function(items) {
      let newItems = []
      items.forEach(e => {
        if (e) {
          e.show = false
          if (e.latestMessage) {
            if (e.latestMessage.messageType == 'image') {
              e.lastMessageText = '[图片]'
            } else if (e.latestMessage.messageType == 'voice') {
              e.lastMessageText = '[语音]'
            } else if (e.latestMessage.messageType == 'file') {
              e.lastMessageText = '[文件]'
            } else if (e.latestMessage.messageType == 'location') {
              e.lastMessageText = '[位置]'
            } else if (e.latestMessage.messageType == 'custom') {
              e.lastMessageText = e.latestMessage.customObject.chatListMsg || ['链接']
            } else {
              e.lastMessageText = e.latestMessage.messageString
            }
            // e.lastMessageTime = imUtils.fromTimer(e.latestMessage.createTime)
            e.lastMessageTime = imUtils.formatDateTime(e.latestMessage.createTime, 'Y-m-d')
            e.messageType = e.latestMessage.messageType
          } else {
            e.lastMessageText = ''
            e.lastMessageTime = ''
            e.messageType = ''
          }
          if (e.conversationType == 'single') {
            // 单聊会话
            e.avatar = e.target.avatar ? e.target.avatar : config.$defaultAvatar
          }
          e.userIdentify = this.getUserIdentify(e)
          newItems.push(e)
        }
      })
      // newItems.sort((a,b) => {
      //   return b.lastMessageTime - a.lastMessageTime
      // })
      return newItems
    },
```
这样改了之后，明显提升速度，但是依旧有坏代码的味道了
```js
	setupList(items){
		return items.filter(Boolean).map(e =>{
			  e.show = false
			  e.lastMessageText = ''
			  e.lastMessageTime = ''
			  e.messageType = ''
			  
			  if (e.latestMessage) {
			    if (e.latestMessage.messageType == 'image') {
			      e.lastMessageText = '[图片]'
			    } else if (e.latestMessage.messageType == 'voice') {
			      e.lastMessageText = '[语音]'
			    } else if (e.latestMessage.messageType == 'file') {
			      e.lastMessageText = '[文件]'
			    } else if (e.latestMessage.messageType == 'location') {
			      e.lastMessageText = '[位置]'
			    } else if (e.latestMessage.messageType == 'custom') {
			      e.lastMessageText = e.latestMessage.customObject.chatListMsg || ['链接']
			    } else {
			      e.lastMessageText = e.latestMessage.messageString
			    }
			    // e.lastMessageTime = imUtils.fromTimer(e.latestMessage.createTime)
			    e.lastMessageTime = imUtils.formatDateTime(e.latestMessage.createTime, 'Y-m-d')
			    e.messageType = e.latestMessage.messageType
			  }
			  
			  if (e.conversationType == 'single') {
			    // 单聊会话
			    e.avatar = e.target.avatar ? e.target.avatar : config.$defaultAvatar
			  }
			  
			  e.userIdentify = this.getUserIdentify(e)
			return e
		});
	},
```

<view id="life-choice-page" class="life-choice-page" @scroll="onBoxScroll">

    // 监听滚动
    onBoxScroll() {
      if (this.isReachBottom()) {
        this.$refs.goodList.nextGoodsPage(); // 触底加载
      }
    },
    // 是否触底
    isReachBottom(){
      const pageBox = document.getElementById('life-choice-page');
      const { 
        scrollTop, //获取dom滚动距离
        offsetHeight, //获取可视区高度
        scrollHeight //获取滚动条总高度
      } = pageBox
      
      const reachBottomHeight = scrollHeight - offsetHeight - scrollTop;
      if (reachBottomHeight === 0) {
        return true // 触底
      }
      
      return false
    }