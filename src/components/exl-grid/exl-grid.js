Polymer({
  is: 'exl-grid',

  properties: {
    expanded: {
      type: Boolean,
      value: false
    },
    _names: {
      type: Array,
      value: function() {
        return ['Aiden', 'Jace', 'Michael', 'Sarah'];
      }
    },
    _employees: {
      type: Array,
      value: function() {
        return [];
      }
    },
    _filterValue: {
      type: String,
      value: ''
    },
    editing: {
      type: Boolean,
      value: true
    },
    activeItem: {
        observer: '_activeItemChanged'
      },
    flag: {
      type: Boolean,
      value: true
    },
    data: {
      type: Boolean,
      notify: true
    },
    items: {
      type: Number,
      notify: true
    }
  },
  openModal: function(e, detail) {
    this.fire('iron-signal', {name:'mysignal', data:'test'});
  },
  expandGrid: function(e) {
    this.expanded ? this.$.grid.expandedItems =[] :
    this.$.grid.expandedItems = [this.users.result[e.model.index]];
    this.expanded = !this.expanded;

  },
  ready: function(){
        this.successCallback = this.successCallback || function(){};

  },
  toggleGrid: function() {
    this.flag = !this.flag;
    this.data = this.flag;
    //this.$.collapse.toggle();
  },
  _activeItemChanged: function(item) {
    this.$.grid.selectedItems = item ? [item] : [];
    console.log(item);
  },

  _onActiveItemChanged: function(e) {
    //  this.$.grid.expandedItems = [e.detail.value];
    },
  observers: [
    '_applyFilter(_filterValue, _employees)'
  ],

  _applyFilter: function(filterValue, employees) {
    this.$.grid.items = employees.filter(function(item) {
      if (filterValue) {
        return (item.firstName.toLowerCase()).indexOf(filterValue.toLowerCase()) > -1;
      } else {
        return true;
      }
    }.bind(this));
  }
});
