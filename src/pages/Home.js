import React, { useEffect, useState, useRef } from 'react';
import { withRouter } from 'react-router-dom';
// UI Kit
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib';
import { Stack } from '@fluentui/react/lib/Stack';
// services
import AuthService from 'services/AuthService';
import LocalizationService from 'services/LocalizationService';
import NavigationService from 'services/NavigationService';
// components
import Card from 'components/Shared/Card/Card';
import CardItem from 'components/Shared/Card/CardItem';
import Modal from 'components/Shared/Modal';
import Notifications from 'components/Shared/Notifications';
import GetStartedMessage from 'components/Home/GetStartedMessage';

function Home() {
  const [userSignedIn, setUserSignedIn] = useState(false);
  const [locData, setLocData] = useState({});
  const [modalDemoState, setModalDemoState] = useState(false);

  const authService = AuthService();
  const localizationService = LocalizationService();
  const navigationService = NavigationService();

  const notificationsRef = useRef(null);

  useEffect(() => {
    let userHasSignedIn = authService.userHasSignedIn();
    setUserSignedIn(userHasSignedIn);

    async function loadLocalization() {
      const locCode = localizationService.getUserLocale();
      const locDataLoaded = await localizationService.getLocalizedTextSet(
        [
          'welcome',
          'homepagewelcome',
          'getstartedmessage',
          'notifications',
          'notificationsdescription',
          'modals',
          'modalsdescription',
          'error',
          'success',
          'view',
          'close',
          'authenticatedcontent',
          'authenticatedcontentdescription'
        ],
        locCode
      );
      setLocData(locDataLoaded);
    }
    loadLocalization();
  }, []);

  const showNotification = (message, type) => {
    notificationsRef.current.show(message, type);
  };

  return (
    <Stack spacing={0}>
      <Stack.Item xs={12} className="contentpanel-site">
        <Card>
          <CardItem>
            <h2>{locData.homepagewelcome}</h2>
						<GetStartedMessage locData={locData} displayGetStarted={true} />
          </CardItem>
        </Card>
        <Stack spacing={0}>
          <Stack.Item xs={12} className="pt-1">
            {userSignedIn && (
              <Stack>
                <Stack.Item xs={12} className="pt-1">
                  <Card>
                    <CardItem>
                      <h4 className="card-title">{locData.authenticatedcontent}</h4>
                      <p>{locData.authenticatedcontentdescription}</p>
                    </CardItem>
                  </Card>
                </Stack.Item>
              </Stack>
            )}

            <Stack>
              <Stack.Item xs={12} className="pt-1 pb-1">
                <Card>
                  <CardItem>
                    <h4 className="card-title">{locData.notifications}</h4>
                    <p>{locData.notificationsdescription}</p>
                  </CardItem>
                  <CardItem>
                    <DefaultButton
                      className="ml-2"
                      color="secondary"
                      onClick={() => showNotification(locData.success, 'success')}
                    >
                      {locData.success}
                    </DefaultButton>
                    <DefaultButton
                      className="ml-2"
                      color="secondary"
                      onClick={() => showNotification(locData.error, 'error')}
                    >
                      {locData.error}
                    </DefaultButton>
                  </CardItem>
                </Card>
              </Stack.Item>
            </Stack>

            <Stack>
              <Stack.Item xs={12} className="pt-1">
                <Card>
                  <CardItem>
                    <h4 className="card-title">{locData.modals}</h4>
                    <p>{locData.modalsdescription}</p>
                  </CardItem>
                  <CardItem>
                    <PrimaryButton className="ml-2" color="secondary" onClick={() => setModalDemoState(true)}>
                      {locData.view}
                    </PrimaryButton>
                  </CardItem>
                </Card>

                <Modal isOpen={modalDemoState} onClose={() => setModalDemoState(false)}>
                  <h1>{locData.welcome}</h1>
                  <p>{locData.homepagewelcome}</p>
                  <PrimaryButton color="secondary" onClick={() => setModalDemoState(false)}>
                    {locData.close}
                  </PrimaryButton>
                </Modal>
              </Stack.Item>
            </Stack>
          </Stack.Item>
        </Stack>
      </Stack.Item>
      <Notifications ref={notificationsRef} />
    </Stack>
  );
}

export default withRouter(Home);
