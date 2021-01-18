<template>
  <div class="hello" v-if = "books.length > 0">
    <table>
     <caption>图书购物车</caption>
     <thead>
       <tr>
        <th>&nbsp;</th>
        <th>书籍名称</th>
        <th>出版日期</th>
        <th>价格</th>
        <th>购买数量</th>
        <th>操作</th>
       </tr>
     </thead>
     <tbody>
       <tr v-for = "(book,index) in books">
          <td >{{book.id}}</td>
          <td >{{book.bookName}}</td>
          <td >{{book.date}}</td>
          <td >{{book.price | showPrice}}</td>
          <td >
            <button v-on:click = "subtraction(book)" :disabled = "book.count &lt;= 1" >-</button>
            {{book.count}}
            <button @click = "increase(index)">+</button>
          </td>
          <td><button @click = remove(index)>移除</button></td>
        </tr>
     </tbody>
     <tfoot><h3>总价：{{totalPrice |showPrice}}</h3></tfoot>
    </table>
  </div>
  <h2 v-else>购物车为空</h2>
</template>

<script>
  
  export default{
    name:'HelloWorld',
    data(){
      return {
        isDisabled: true,
        books:[
          {
            id:1,
            bookName:'《算法导论》',
            date:'2006-9',
            price:85,
            number:1,
            count:1
          },
          {
            id:2,
            bookName:'《Unix编程艺术》',
            date:'2006-2',
            price:59,
            number:1,
            count:1
          },
          {
            id:3,
            bookName:'《编程珠玑》',
            date:'2008-10',
            price:39,
            number:1,
            count:1
          },
          {
            id:4,
            bookName:'《代码大全》',
            date:'2006-3',
            price:39,
            number:1,
            count:1
          }
        ]
      };
    },
    methods:{
      fnPriceFormat(price){
        return '￥'+price.toFixed(2);
      },
      subtraction(book){
        // if(book.count > 1){
        //   book.count--;
        // }
          book.count--;
      },
      increase(index){
        this.books[index].count++;
      },
      remove(index){
        this.books.splice(index, 1);
      }

    },
    computed:{
      totalPrice(){ 
        let totalPrice = 0;
        for(let index in this.books)  
          totalPrice += this.books[index].price * this.books[index].count;
          return totalPrice;
      }
    },
    filters:{
      showPrice(price){
        return '￥'+price.toFixed(2);
      }
    }
  
}
  





// export default {
//   name: 'HelloWorld',
//   data () {
//     return {
//       msg: 'Welcome to Your Vue.js App'
//     }
//   }

// }
</script>

<!--scoped限制组件样式作用域 -->
 <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  caption{
    font-size: 30px;
    font-weight: bold;
  }
  table{
    color: black;
    align-self: start;
    border-collapse: collapse;
  }
  th{
    background-color: darkgray;
    border: gray solid 1px;
  }
  td{
    width:  100px;
    height: 40px;
    align-self: start;
    border: gray solid 1px;
  }
  tfoot{
    border: 0px;
  }
</style>
