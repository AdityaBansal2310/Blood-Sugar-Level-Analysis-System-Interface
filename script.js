function analyze() {
    var bloodSugarValue = document.getElementById('bloodSugar').value;
    var resultElement = document.getElementById('result');
  
    if (bloodSugarValue >= 80 && bloodSugarValue <= 120) {
      resultElement.innerHTML = 'Your blood sugar level is normal.';
    } else {
      resultElement.innerHTML = 'Your blood sugar level is outside the normal range. Please consult your doctor.';
    }
  }
  