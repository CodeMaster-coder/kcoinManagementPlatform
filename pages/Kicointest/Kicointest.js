// pages/Kicointest/Kicointest.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  name:[],
  score:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;//把this对象复制到临时变量that，解决作用域不够的问题
      that.setData({
        name:[],
        score:[]
      });
      wx.request({
            url: 'https://www.zqzqsmile.xyz/kcointest_kcoin/login',
            method:'POST',
            header: {
              'content-type': 'application/json' // 默认值
            },
           
            success: function(res) {
              console.log(res.data);
  var obj = res.data;
  
  
  for(var i=0;i<obj.length;i++)
  {
    var name1 = obj[i].name,
    score1 = obj[i].score,
    name = that.data.name,
    score = that.data.score;
  
    name.push(name1);
    score.push(score1);
  
  
     that.setData({
      name: that.data.name,
      score: that.data.score
    });   
    // 调试时打开该语句
  }
  // console.log(obj.model);
  // console.log(that.data.number);
            }
          })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})