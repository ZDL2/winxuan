import axios from 'axios'
// const baseUrl= 'http://10.3.134.248:3000/'
export default {
  get(url,data){
    axios.get(url,data).then((res) => {
      // this.setState({
        data= res.data.data;
        console.log(data,url)
      // })
    }).catch(function (error) {
      console.log(error);
    });
  }
}
