/*
 * @summary: An enum manager object
 * @param: name
 *    @type: Object (Array)
 *    @description: array of objects containing a name and values or an array of EnumObjects
 *    @optional: true
 * @returns: an EnumManager
 */
EnumManager = function (enums) {
  this.props = {};
  // If enums were passed in in an array, add init the manager with the enums.
  if (typeof enums === "object") {
    this.props._enums = _init(enums);
  } else {
    this.props._enums = [];
  }

  return this;
}

// @summary: Adds an enum
// @param: vals
//    @type: Object (Array)
//    @optional: false
EnumManager.prototype.add = function (en) {
  this.props._enums.push(_createEnum(en));
};

// @summary: Returns the mapped key or value by calling the EnumObject's map method.
// @param: name
//    @type: String
//    @description: Name of the EnumObject you want to map.
//    @optional: false
// @param: input
//    @type: String || Number
//    @description: Is either the key or value you want to map
//    @optional: false
// @returns: If passed a string, returns a number that represents the key,
//           otherwise, return the string representing the value.
EnumManager.prototype.map = function (name, input) {
  return _getEnum.call(this, name).map(input);
};

// Get all or just one enum
EnumManager.prototype.get = function (name) {
  debugger;
  if (name) {
    return _.findWhere(this.props._enums, { name: name });
  }

  return this.props._enums;
}

// Private methods
// init self._enums with the enums passed in
function _init(enums) {
  var _mapper = function (en) {
    return _createEnum(en);
  };

  return enums.map(_mapper);
}

// Gets the EnumObject with the name that is passed in
function _getEnum (name) {
  return _.findWhere(this.props._enums, { name: name });
}

// Returns an EnumObject
function _createEnum (en) {
  if (en instanceof EnumObject)
    return en;

  return new EnumObject(en.name, { values: en.values });
}
