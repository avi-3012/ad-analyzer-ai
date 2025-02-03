const updateKeywords = (adData) => {
    return adData.map((entry) => {
        if (entry.clicks > 100 && entry.acos > 50) {
            return { ...entry, action: "REMOVE" }; // High ACOS → Remove
        } else if (entry.ctr > 5 && entry.conversions > 10) {
            return { ...entry, action: "BOOST" }; // High CTR → Boost
        }
        return { ...entry, action: "NO_CHANGE" };
    });
};

module.exports = { updateKeywords };
