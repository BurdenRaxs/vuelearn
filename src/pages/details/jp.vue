<template>
  <div class="item">
    <h3>日本服务集群</h3>
    <p>欧美服务器中,尤以美国服务器以及欧洲中德国服务器、英国服务器最受国人追捧</p>
    <form1 :from="servers"></form1>
    <div class="describe">
      <h2>产品说明</h2>
      <p>网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。</p>

      <h3>用户行为指标</h3>

      <p>用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：</p>
      <p>用户在网站的停留时间；</p>
      <p>用户来源网站（也叫“引导网站”）；</p>
      <p>用户所使用的搜索引擎及其关键词；</p>
      <p>在不同时段的用户访问量情况等。</p>


      <h3>浏览网站方式</h3>

      <p>用户上网设备类型</p>
      <p>用户浏览器的名称和版本</p>
      <p>访问者电脑分辨率显示模式</p>
      <p>用户所使用的操作系统名称和版本</p>
      <p>用户所在地理区域分布状况等</p>

    </div>
  </div>
</template>
<script>
  import form1 from '../../components/form'
  export default {
    data () {
      return {
        servers:'日本服务器'
      }
    },
    components:{
      form1
    }
  }
</script>
<style>
  h3{
    padding: 10px 20px;
  }
  h2{
    padding: 10px 20px;
  }
  p{
    padding: 1px 20px;
  }
  .describe h3{
    padding: 10px 20px;
  }
  .describe h2{
    padding: 10px 20px;
  }
  .describe p{
    padding: 1px 20px;
  }

</style>
