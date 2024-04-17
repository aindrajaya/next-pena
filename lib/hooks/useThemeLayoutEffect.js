const { useEffect, useLayoutEffect } = require('react');

let useThemeLayoutEffect;

if (typeof window !== 'undefined') {
  useThemeLayoutEffect = function (effect, deps) {
    return useLayoutEffect(effect, deps);
  };
} else {
  useThemeLayoutEffect = function (effect, deps) {
    return useEffect(effect, deps);
  };
}

module.exports = { useThemeLayoutEffect };
