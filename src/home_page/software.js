import React from 'react';

function SoftwareSection() {
    const softwareList = [
        { name: "Google Workspace ", attrs: "(Docs, Sheets, Slides, Drive)" },
        { name: "Microsoft Office Suite ", attrs: "(Word, Excel, PowerPoint)" },
        { name: "Shopify ", attrs: "(Ecommerce, Web Development)" },
        { name: "PBS Systems ", attrs: "(Automotive Industry Software)" },
        { name: "Adobe Photoshop ", attrs: "(Image Editing, Graphic Design)" },
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

export default SoftwareSection;