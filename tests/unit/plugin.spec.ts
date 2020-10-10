import getInteractComponent from "@/interact";
import { createLocalVue, mount } from "@vue/test-utils";
import interact from "interactjs";
import VueInteractjs from "../../src";

describe("Component", () => {
  it("should can mount the interact with global component/options", () => {
    const localVue = createLocalVue();
    localVue.use(VueInteractjs);

    const interactComponent = getInteractComponent(interact);

    const logs: string[] = [];
    const initLog = "inited";

    const wrapper = mount(interactComponent, {
      propsData: {
        draggable: true
      },
      listeners: {
        ready() {
          logs.push(initLog);
        }
      }
    });

    expect(logs[0]).toBe(initLog);

    // @deprecated
    // expect(wrapper.name()).toBe("Interact");
    expect(wrapper.classes()).toContain("interact");
    expect(wrapper.isVisible()).toBeTruthy();
    expect(wrapper.find("div")).toBeTruthy();

    const vm = wrapper.vm;

    // @deprecated
    // expect(vm.interactInstance).toBeInstanceOf(interact);
    expect(Object.keys(wrapper.props())).toContain("draggable");
    expect(typeof vm.draggable).toBe("boolean");
    expect(wrapper.props().draggable).toBe(true);
    expect(Object.keys(wrapper.props())).toContain("resizable");
    expect(typeof vm.resizable).toBe("boolean");
    expect(wrapper.props().resizable).toBe(false);
    expect(Object.keys(wrapper.props())).toContain("droppable");
    expect(typeof vm.droppable).toBe("boolean");
    expect(wrapper.props().droppable).toBe(false);
    expect(Object.keys(wrapper.props())).toContain("gesturable");
    expect(typeof vm.gesturable).toBe("boolean");
    expect(wrapper.props().gesturable).toBe(false);

    expect(typeof vm.init).toBe("function");
    expect(typeof vm.initDrag).toBe("function");
    expect(typeof vm.initResize).toBe("function");
    expect(typeof vm.initDrop).toBe("function");
    expect(typeof vm.initGesture).toBe("function");
  });
});
