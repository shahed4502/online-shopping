import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from '../../ui/layouts/MainLayout.jsx';
import App from '../../ui/pages/App.jsx';
import NavBar from '../../ui/layouts/NavBar.jsx';
import NavBarAdmin from '../../ui/layouts/NavBarAdmin.jsx';
import AdminPage from '../../ui/pages/AdminPage.jsx';
import InsertPage from '../../ui/pages/InsertPage.jsx';
import UserPage from '../../ui/pages/UserPage.jsx';
import ShowCart from '../../ui/pages/ShowCart.jsx';
import ViewOrders from '../../ui/pages/ViewOrders.jsx';
import ViewOrdersUser from '../../ui/pages/ViewOrdersUser.jsx';
import AboutPage from '../../ui/pages/AboutPage.jsx';
import ContactPage from '../../ui/pages/ContactPage.jsx';
import ProfilePage from '../../ui/pages/ProfilePage.jsx';

//Route are definitions starts from here
FlowRouter.route('/', {
    action() {
      mount(MainLayout, {
        nav: (<NavBar />),
        content: (<App />)
      })
    }
  });

FlowRouter.route('/AdminPage', {
    action() {
      mount(MainLayout, {
        nav: (<NavBarAdmin />),
        content: (<AdminPage />)
      })
    }
  });


FlowRouter.route('/InsertPage', {
    action() {
      mount(MainLayout, {
        nav: (<NavBarAdmin />),
        content: (<InsertPage />)
      })
    }
  });

FlowRouter.route('/UserPage', {
    action() {
      mount(MainLayout, {
        nav: (<NavBar />),
        content: (<UserPage />)
      })
    }
  });

FlowRouter.route('/ShowCart', {
    action() {
      mount(MainLayout, {
        nav: (<NavBar />),
        content: (<ShowCart />)
      })
    }
  });

FlowRouter.route('/ViewOrders', {
    action() {
      mount(MainLayout, {
        nav: (<NavBarAdmin />),
        content: (<ViewOrders />)
      })
    }
  });

FlowRouter.route('/ViewOrdersUser', {
    action() {
      mount(MainLayout, {
        nav: (<NavBar />),
        content: (<ViewOrdersUser />)
      })
    }
  });

FlowRouter.route('/AboutPage', {
    action() {
      mount(MainLayout, {
        nav: (<NavBar />),
        content: (<AboutPage />)
      })
    }
  });

FlowRouter.route('/ContactPage', {
    action() {
      mount(MainLayout, {
        nav: (<NavBar />),
        content: (<ContactPage />)
      })
    }
  });

FlowRouter.route('/ProfilePage', {
    action() {
      mount(MainLayout, {
        nav: (<NavBar />),
        content: (<ProfilePage />)
      })
    }
  });
//Route definition ends