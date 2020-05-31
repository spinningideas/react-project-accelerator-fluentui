import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
// UI Kit
import { PrimaryButton } from '@fluentui/react/lib';
import { Stack } from '@fluentui/react/lib/Stack';
import { TextField } from '@fluentui/react/lib/TextField';
// components
import Card from 'components/Shared/Card/Card';
import CardItem from 'components/Shared/Card/CardItem';
// Services
import LocalizationService from 'services/LocalizationService';

function Contact() {
  const [locData, setLocData] = useState({});

  const localizationService = LocalizationService();

  useEffect(() => {
    async function loadLocalization() {
      const locCode = localizationService.getUserLocale();
      const locDataLoaded = await localizationService.getLocalizedTextSet(
        ['contact', 'contactdescription', 'moreinfo', 'save', 'name', 'email', 'message', 'messagedescription'],
        locCode
      );
      setLocData(locDataLoaded);
    }
    loadLocalization();
  }, []);

  return (
    <Stack spacing={0}>
      <Stack.Item xs={12}>
        <Card>
          <CardItem>
            <h3>{locData.contact}</h3>
            <p>{locData.contactdescription}</p>
          </CardItem>
        </Card>
        <Stack spacing={0}>
          <Stack.Item xs={12} md={12} lg={12} xl={12}>
            <Card>
              <CardItem>
                <form noValidate autoComplete="off">
                  <div>
                    <TextField id="name" label={locData.name} required />
                  </div>
                  <div>
                    <TextField id="email" label={locData.email} required />
                  </div>
                  <div>
                    <TextField
                      id="message"
                      label={locData.message}
                      multiline
                      rows={4}
                      defaultValue={locData.messagedescription}
                    />
                  </div>
                </form>
              </CardItem>
              <CardItem>
                <PrimaryButton className="ml-2" color="secondary">
                  {locData.save}
                </PrimaryButton>
              </CardItem>
            </Card>
          </Stack.Item>
        </Stack>
      </Stack.Item>
    </Stack>
  );
}

export default withRouter(Contact);
