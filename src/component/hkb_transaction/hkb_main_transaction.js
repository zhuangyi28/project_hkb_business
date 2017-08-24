/**
 * Created by ZHUANGYI on 2017/8/23.
 */


var transactionList = {


    dateChoose:function (details) {

        //var _this =this;

        //_this.fn = details.fn || 0;


    var thisEle = document.getElementsByClassName('transaction_date');

    var thisInput = document.getElementsByTagName('input');


    for (var i =0;i<thisEle.length;i++){


        //点击元素input获得焦点
        thisEle[i].addEventListener('click',function () {


            this.getElementsByTagName('input')[0].focus();


        },false);


        //监听input是否有改变

        thisEle[i].getElementsByTagName('input')[0].addEventListener('change',function () {


            this.parentNode.parentNode.getElementsByClassName('time_show')[0].getElementsByTagName('span')[0].innerText = this.value;


        },false);


    }


}


};

