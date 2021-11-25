import React, { Fragment, useEffect } from 'react';
import grapesjs from 'grapesjs';
import pt from 'grapesjs/locale/pt';
import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs-blocks-flexbox';
import 'grapesjs-preset-webpage';
import 'grapesjs-preset-newsletter';
import 'grapesjs-lory-slider';
// import grapesJSMJML from 'grapesjs-mjml'
// import plugin from 'grapesjs-typed';
import 'grapesjs/dist/css/grapes.min.css';
import { layoutDefaultCss, layoutDefaultHtml } from './layoutDefaultNewsletter';


function App() {
  // layout
  useEffect(() => {
    grapesjs.init({
      container : '#gjs',
      avoidInlineStyle : false,
      i18n: {
        messages: { pt }
      },
      components: layoutDefaultHtml,
      style: layoutDefaultCss,
      fromElement: true,
      plugins: ['gjs-preset-webpage', 'grapesjs-lory-slider', 'gjs-blocks-flexbox'
      // grapesJSMJML, plugin
      ],
      pluginsOpts: {
        'gjs-preset-webpage': {},
        'grapesjs-lory-slider': { sliderBlock: { category: 'Extra' }},
        'gjs-blocks-flexbox': {}
        // plugin: { category: 'Extra' },
        // grapesJSMJML: {/* ...options */}
      },
      storageManager: {
        id: 'gjs-',             // Prefix identifier that will be used on parameters
        type: 'local',          // Type of the storage
        autosave: true,         // Store data automatically
        autoload: true,         // Autoload stored data on init
        stepsBeforeSave: 1,     // If autosave enabled, indicates how many changes are necessary before store method is triggered
      },
    })
  })
  return (
    <Fragment>
      <div id="gjs">{layoutDefaultHtml}</div>
    </Fragment>
  );
}

export default App;
