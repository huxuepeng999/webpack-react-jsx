// Vue 2的底层主要依赖于以下几个核心原理：

// 响应式系统：Vue 2使用了一个响应式系统来跟踪数据变化，并在这些变化发生时更新DOM。

// 虚拟DOM：Vue 2使用了一个虚拟DOM来高效地更新真实的DOM。虚拟DOM是一个JavaScript对象树，它代表了DOM的状态。

// 组件系统：Vue 2有一个组件系统，允许开发者创建可复用的组件。

// 模板编译：Vue模板会被编译成渲染函数，渲染函数返回虚拟DOM树。

// 数据绑定与依赖追踪：Vue使用ES5的getter和setter以及触发的观察者模式来追踪依赖，并在数据变化时更新视图。

// 指令系统：Vue有一套指令系统，允许开发者在模板中使用指令来执行DOM操作。

// 插件系统：Vue有一个插件系统，允许开发者创建可被Vue实例使用的全局插件


// v-model 原理
// input事件绑定
// 组件上通过$emit回调


// vue3底层原理
// Vue 3 的底层原理主要涉及以下几个关键点：

// Proxy API：Vue 3 使用了 ES6 中的 Proxy 来替代 Vue 2 中的 Object.defineProperty。Proxy 可以直接监听对象的操作，比如属性访问、属性设置、删除属性等，
// 而无需像 Object.defineProperty 那样需要为每个属性单独定义。

// Composition API：Vue 3 引入了 Composition API，它允许开发者通过逻辑复用来组合组件的逻辑。

// 响应式系统的改进：Vue 3 的响应式系统进行了优化，包括更好的响应式依赖追踪和优化的响应式更新机制。

// 编译器优化：Vue 3 使用了编译时优化，比如静态节点提升，以提高渲染性能。

// Tree-shaking 支持：Vue 3 更好地支持了 Tree-shaking，可以通过静态分析来移除未使用的代码。

// Custom Render API：Vue 3 引入了 Custom Render API，允许开发者使用自定义渲染函数。