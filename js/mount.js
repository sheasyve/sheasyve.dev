const { React, ReactDOM } = window;

const mountAll = () => {
    const COMPONENT_MAP = [
        { id: 'header', Component: window.Header },
        { id: 'projects', Component: window.ProjectsSection },
        { id: 'contests', Component: window.ContestsSection },
        { id: 'interests', Component: window.InterestsSection },
        { id: 'languages', Component: window.LanguagesSection },
        { id: 'software', Component: window.SoftwareSection },
        { id: 'tools', Component: window.ToolsSection },
        { id: 'button-root', Component: window.ButtonComponent }
    ];

    let allSuccessful = true;

    COMPONENT_MAP.forEach(({ id, Component }) => {
        const el = document.getElementById(id);
        
        if (el && Component) {
            if (!el.dataset.rendered) {
                try {
                    const root = ReactDOM.createRoot(el);
                    root.render(React.createElement(Component));
                    el.dataset.rendered = "true";
                    console.log(`✅ Mounted: ${id}`);
                } catch (err) {
                    console.error(`❌ Error mounting ${id}:`, err);
                }
            }
        } else {
            if (el && !Component) {
                allSuccessful = false;
            }
        }
    });

    return allSuccessful;
};

let attempts = 0;
const forceLoad = () => {
    const finished = mountAll();
    attempts++;
    if (!finished && attempts < 50) { 
        setTimeout(forceLoad, 100);
    }
};

forceLoad();