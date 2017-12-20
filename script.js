const bitcoin = function() {
    var API_URL=`https://bitpay.com/api/rates`;
    $.ajax({
        type: 'GET',
        url: API_URL,
        dataType: 'json',
        success: function(data){
            console.log(data);   
            
            <table style="width:80%">
            <tr>
                <th></th>
              <th>Bitcoin</th>
              <th>BTC/USD</th>
              <th>BTC/EUR</th>
              <th>BTC/GBP</th>
              <th>BTC/JPY</th>
              <th>BTC/CAD</th>
            </tr>
            <tr>
              <td>Prices</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        },
        error: function(error){
            console.log(error)
        }
    })
};

crypto();