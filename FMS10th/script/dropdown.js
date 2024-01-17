
    // Simulated data from a database. In real-world scenarios, fetch this data using AJAX or another method.
const states = [
                {id:1,name: 'AJMER' },
                {id:2,name: 'ALWAR' },
                {id:3,name: 'BANSWARA' },
                {id:4,name: 'BARMER' },
                {id:5,name: 'BEAWAR' },
                {id:6,name: 'BHARTPUR' },
                {id:7,name: 'BHILWARA' },
                {id:8,name: 'BIKANER' },
                {id:9,name: 'BUNDI' },
                {id:10,name: 'CHITTORGARH' },
                {id:11,name: 'CHURU' },
                {id:12,name: 'DAUSA' },
                {id:13,name: 'DHOLPUR' },
                {id:14,name: 'DUNGARPUR' },
                {id:15,name: 'HANUMANGARH' },
                {id:16,name: 'JAISALMER' },
                {id:17,name: 'JALORE' },
                {id:18,name: 'JHALAWAR' },
                {id:19,name: 'JHUNJHUNU' },
                {id:20,name: 'KARAULI' },
                {id:21,name: 'KOTA' },
                {id:22,name: ' NAGAUR' },
                {id:23,name: 'PALI' },
                {id:24,name: 'PRATAPGARH' },
                {id:25,name: ' RAJSAMAND' },
                {id:26,name: 'SAWAI MADHOPUR' },
                {id:27,name: 'SIKAR' },
                {id:28,name: 'SIROHI' },
                {id:29,name: 'SRI GANGANAGAR' },
                {id:30,name: 'TONK' },
                {id:31,name: 'UDAIPUR' },
                {id:32,name: 'KEKRI' },
                {id:33,name: 'KOTPITLI' },
                {id:34,name: 'NEEM KA THANA' },
                {id:35,name: 'SANCHORE' },
                {id:36,name: 'JODHPUR' },
                {id:37,name: 'JAIPUR' },];

const cities = {
  1: ['Christianganj Police Station', 'Civil Lines Police Station','Kotwali Ajmer Police Station','Mahila/ Women Police Station','Adarsh Nagar Police Station','Alwar Gate Police Station','Clock Tower Police Station','Ramganj Police Station','Gegal Police Station','Mangliyawas Police Station','Nasirabad City Police Station','Pisangan Police Station','Pushkar Police Station','Dargah Police Station','Ganj Police Station','Beawar City Police Station','Jawaja Police Station','Masuda Police Station','Sadar Beawar Police Station','Bhinai Police Station','Kekri Police Station','Sarana Police Station','Sarwar Police Station','Bander Sindri Police Station','Gandhi Nagar Police Station','Kishangarh Police Station','Madanganj Police Station','Arian Police Station','Borada Police Station','Rupangarh Police Station','Bijay Nagar Police Station','Nasirabad Sadar Police Station','Shri Nagar Police Station'],
  2: ['Kotwali Alwar Police Station', 'N.E.B. Police Station','Shivaji Park Police Station','Aravali Vihar Police Station','Govind Garh Police Station','Nauganwa Police Station','Ramgarh Police Station','Udhyog Nagar Police Station','Bahror Police Station','Bansur Police Station'],
  // ... add more cities associated with states
};

// Populate states dropdown
const statesDropdown = document.getElementById('citiesDropdown');
states.forEach(state => {
  const option = document.createElement('option');
  option.value = state.id;
  option.textContent = state.name;
  statesDropdown.appendChild(option);
});

function fetchCities() {
  const selectedStateId = statesDropdown.value;
  const citiesDropdown = document.getElementById('stationDropdown');
  
  // Clear existing options
  citiesDropdown.innerHTML = '<option value="">Select Police station</option>';
  
  if (selectedStateId) {
    cities[selectedStateId].forEach(cityName => {
      const option = document.createElement('option');
      option.value = cityName;
      option.textContent = cityName;
      citiesDropdown.appendChild(option);
    });
  }
}
