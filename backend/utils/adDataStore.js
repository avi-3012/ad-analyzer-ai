let adData = null; // Shared in-memory variable

module.exports = {
  getAdData: () => adData,
  setAdData: (data) => (adData = data),
  clearAdData: () => (adData = null),
};