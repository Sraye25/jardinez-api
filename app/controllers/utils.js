/**
 * Check the validaity of the species body
 */
exports.isValidSpeciesBody = (body) => {
    if (!body || body.name == undefined || body.description == undefined) return false;
    return true;
};

/**
 * Check the validaity of the variety body
 */
exports.isValidVarietyBody = (body) => {
    if (!body || body.name == undefined || body.description == undefined) return false;
    return true;
};