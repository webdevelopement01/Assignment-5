/**Responsive navbar design  */
const mobileBtn = document.getElementById('mobile-scren-menu-btn');
const menuBtn = document.getElementById('menu-btn').addEventListener('click',() =>{
    mobileBtn.classList.toggle('hidden')
});

//*************************** */
let totalBalance = 5500;
    const historyList = document.getElementById('history-list');

    // Function to handle donations
    function handleDonation(donateButtonId, donationInputId, donationDisplayId, initialAmount, donationTitle) {
      document.getElementById(donateButtonId).addEventListener('click', function() {
        const donationInput = document.getElementById(donationInputId).value;
        const donationAmount = parseFloat(donationInput);

        if (isNaN(donationAmount)) {
          alert('Please enter a valid number for the donation.');
        } else if (donationAmount <= 0) {
          alert('Donation amount must be greater than 0.');
        } else if (donationAmount > totalBalance) {
          alert('Insufficient balance for this donation.');
        } else {
          totalBalance -= donationAmount;
          initialAmount += donationAmount;
          
          document.getElementById('total-balance').innerText = totalBalance + ' BDT';
          document.getElementById(donationDisplayId).innerText = initialAmount + ' BDT';

          const currentDateTime = new Date();
          const formattedDateTime = currentDateTime.toLocaleString();

          const listItem = document.createElement('li');
          listItem.textContent = `Donated ${donationAmount} BDT for ${donationTitle} on ${formattedDateTime}`;
          historyList.appendChild(listItem);

          // Show congratulations modal
          document.getElementById('congratulations-card').classList.remove('hidden');
        }

        document.getElementById(donationInputId).value = '';
      });
    }

    // Initialize donation functionality for each card
    handleDonation('donate-btn-1', 'donation-amount-1', 'donated-noakhali', 0, 'Flood at Noakhali');
    handleDonation('donate-btn-2', 'donation-amount-2', 'donated-feni', 600, 'Flood Relief in Feni');
    handleDonation('donate-btn-3', 'donation-amount-3', 'donated-quota', 2400, 'Aid for Injured in the Quota Movement');

    // Handle tab switching between Donation and History
    document.getElementById('donation-tab').addEventListener('click', function() {
      document.getElementById('donation-section').classList.remove('hidden');
      document.getElementById('history-section').classList.add('hidden');
      this.classList.add('active-button');
      document.getElementById('history-tab').classList.remove('active-button');
      document.getElementById('history-tab').classList.add('inactive-button');
    });

    document.getElementById('history-tab').addEventListener('click', function() {
      document.getElementById('donation-section').classList.add('hidden');
      document.getElementById('history-section').classList.remove('hidden');
      this.classList.add('active-button');
      document.getElementById('donation-tab').classList.remove('active-button');
      document.getElementById('donation-tab').classList.add('inactive-button');
    });

    // Close the congratulations modal
    document.getElementById('close-modal').addEventListener('click', function() {
      document.getElementById('congratulations-card').classList.add('hidden');
    });

