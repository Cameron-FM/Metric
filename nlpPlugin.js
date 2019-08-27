var plugin = {
  words: {
    'sugar': 'metricPrefixItem',
    'corn': 'metricSuffixItem',
    'chocolate': 'metricSuffixItem',
    'flour': 'metricPrefixItem',
    'salt': 'metricFoodItem',
    'cocoa': 'metricSuffixItem',
    'butter': 'metricPrefixItem',
    'honey': 'metricFoodItem',
    'treacle': 'metricFoodItem',
    'molasses': 'metricFoodItem',
    'syrup' : 'metricPrefixItem',
    'jam' : 'metricFoodItem',
    'jelly': 'metricFoodItem',
    'raisins': 'metricFoodItem',
    'sultanas': 'metricFoodItem',
    'oats': 'metricFoodItem',
    'milk': 'metricFoodItem',
    'buttermilk': 'metricFoodItem',
    'cheese': 'metricPrefixItem',
    'cream': 'metricFoodItem',
    'rice': 'metricPrefixItem',
    'coconut': 'metricFoodItem'
  },
  tags: {
    metricFoodItem:{
      isA: 'Noun'
    },
    metricPrefixItem:{
      isA: 'metricFoodItem'
    },
    metricSuffixItem:{
      isA: 'metricFoodItem'
    }
  }
}
export default plugin
