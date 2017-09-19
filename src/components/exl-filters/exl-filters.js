Polymer({
  is: 'exl-filters',
  properties: {
    selected: {
      type: Number,
      value: 0
    },
    flag: {
      type: Boolean,
      value: false
    }
  },
  toggleGrid: function() {
    this.$.collapse.toggle();
  },  
  apply: function() {
    console.log('applying....');
  }
});
