// Generated by LiveScript 1.3.1
(function(){
  var convert_parents_to_children, convert_children_to_parents, preprocessing_options, rename_edge_type, reverse_edge_direction, out$ = typeof exports != 'undefined' && exports || this;
  out$.convert_parents_to_children = convert_parents_to_children = function(data){
    data = reverse_edge_direction('parents', data);
    data = rename_edge_type('parents', 'children', data);
    return data;
  };
  out$.convert_children_to_parents = convert_children_to_parents = function(data){
    data = reverse_edge_direction('children', data);
    data = rename_edge_type('children', 'parents', data);
    return data;
  };
  out$.preprocessing_options = preprocessing_options = {
    convert_parents_to_children: convert_parents_to_children,
    convert_children_to_parents: convert_children_to_parents
  };
  out$.rename_edge_type = rename_edge_type = function(orig_name, new_name, data){
    var output, topic_name, topic_info;
    output = {};
    for (topic_name in data) {
      topic_info = data[topic_name];
      topic_info = import$({}, topic_info);
      if (topic_info[orig_name] != null) {
        if (topic_info[new_name] == null) {
          topic_info[new_name] = [];
        }
        topic_info[new_name] = topic_info[new_name].concat(topic_info[orig_name]);
        delete topic_info[orig_name];
      }
      output[topic_name] = topic_info;
    }
    return output;
  };
  out$.reverse_edge_direction = reverse_edge_direction = function(edge_type, data){
    var output, topic_name, topic_info, i$, ref$, len$, child;
    output = {};
    for (topic_name in data) {
      topic_info = data[topic_name];
      topic_info = import$({}, topic_info);
      topic_info[edge_type] = [];
      output[topic_name] = topic_info;
    }
    for (topic_name in data) {
      topic_info = data[topic_name];
      if (topic_info[edge_type] != null) {
        for (i$ = 0, len$ = (ref$ = topic_info[edge_type]).length; i$ < len$; ++i$) {
          child = ref$[i$];
          if (output[child] == null) {
            output[child] = {};
            output[child][edge_type] = [];
          }
          output[child][edge_type].push(topic_name);
        }
      }
    }
    return output;
  };
  function import$(obj, src){
    var own = {}.hasOwnProperty;
    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
    return obj;
  }
}).call(this);