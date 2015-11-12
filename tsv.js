exports.translate = function (load) {
    var data = load.source.replace(/\n+$/, '').split('\n');
    var headers = data[0].split('\t');
    var rows = data.slice(1).map(function (row) {
        var ret = {};
        row.split('\t').forEach(function (cell, i) { ret[headers[i]] = cell; });
        return ret;
    });
    return 'module.exports = ' + JSON.stringify(rows);
};
