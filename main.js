document.getElementById("currency-form").addEventListener("submit", async function (event) {
    event.preventDefault();
    
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const amount = document.getElementById("amount").value;
  
    // Directly input the API key here
    const apiKey = '4847d09b77406d26240a67e0'; 
  
    try {
      // API request URL with endpoint formatting
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`);
      const data = await response.json();
  
      if (data.result === "success") {
        const result = data.conversion_result;
        document.getElementById("result").textContent = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
      } else {
        document.getElementById("result").textContent = "Error fetching data.";
      }
    } catch (error) {
      console.error("Error:", error);
      document.getElementById("result").textContent = "Conversion failed. Please try again.";
    }
  });
  