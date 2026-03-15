
function SoftwareSection() {
    const softwareList = [
        { name: "Google Workspace ", attrs: "(Docs, Sheets, Slides, Drive)" },
        { name: "Microsoft Office Suite ", attrs: "(Word, Excel, PowerPoint)" },
        { name: "Shopify ", attrs: "(Ecommerce, Web Development)" },
        { name: "PBS Systems ", attrs: "(Automotive Industry Software)" },
        { name: "Blender ", attrs: "(3D Modeling, Animation, Rendering)" },
        { name: "Adobe Photoshop ", attrs: "(Image Editing, Graphic Design)" },
        { name: "Ableton Live ", attrs: "(Audio Editing, Music Production)" }
    ];

    return (
        <div className="list">
            <h3>Software Proficiency</h3>
            <ul className="bulletlist">
                {softwareList.map((software, index) => (
                    <li key={index}>
                        {software.name}
                        <span className="softwareattributes">{software.attrs}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const softwareDiv = document.getElementById('software');
if (softwareDiv) {
    const softwareRoot = ReactDOM.createRoot(softwareDiv);
    softwareRoot.render(<SoftwareSection />);
}
