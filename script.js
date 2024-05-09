function calculate() {
  const sellingPrice = parseFloat(document.getElementById('selling-price').value);
  const costPrice = parseFloat(document.getElementById('cost-price').value);
  const offsiteAdsFee = parseFloat(document.getElementById('offsite-ads-fee').value);

  let listingFee = 0.2;
  let transactionFee = 0.065 * sellingPrice;
  let processingFee = 0.03 * sellingPrice + 0.25;
  let offsiteAdsFeePercentage = 0;

  if (offsiteAdsFee !== 0) {
    offsiteAdsFeePercentage = offsiteAdsFee * sellingPrice;
  }

  const totalCost = costPrice + listingFee + transactionFee + processingFee + offsiteAdsFeePercentage;
  const profit = sellingPrice - totalCost;

  const results = `
    <table class="borderless">
      <tr>
        <td>Revenue</td>
        <td>$${sellingPrice.toFixed(2)}</td>
      </tr>
      <tr>
        <td>Cost Price</td>
        <td>$${costPrice.toFixed(2)}</td>
      </tr>
      <tr>
        <td>Listing Fees</td>
        <td>$${listingFee.toFixed(2)}</td>
      </tr>
      <tr>
        <td>Transaction Fees</td>
        <td>$${transactionFee.toFixed(2)}</td>
      </tr>
      <tr>
        <td>Processing Fees</td>
        <td>$${processingFee.toFixed(2)}</td>
      </tr>
      ${offsiteAdsFee !== 0 ? `<tr><td>Offsite Ads Fee</td><td>${offsiteAdsFee * 100}%</td></tr>` : ''}
      <tr>
        <td>Total Cost</td>
        <td>$${totalCost.toFixed(2)}</td>
      </tr>
      <tr>
        <td><b>Total Profit</b></td>
        <td><b>$${profit.toFixed(2)}</b></td>
      </tr>
       <tr>
        <td><b>Total Etsy Fees</b></td>
        <td><b>$${(totalCost - costPrice).toFixed(2)}</b></td>
      </tr>
        <tr>
        <td><b>Profit Margin</b></td>
        <td><b>${(profit / sellingPrice * 100).toFixed(2)}%</b></td>
      </tr>
    </table>
  `;

  document.getElementById('results').innerHTML = results;
}