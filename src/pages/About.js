import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
// fluent-ui
import { PrimaryButton } from '@fluentui/react/lib';
import { Stack } from '@fluentui/react/lib/Stack';
// components
import Card from 'components/Card/Card';
import CardItem from 'components/Card/CardItem';
// Services
import LocalizationService from 'services/LocalizationService';

function About() {
  const [locData, setLocData] = useState({});

  const localizationService = LocalizationService();

  useEffect(() => {
    async function loadLocalization() {
      const locCode = localizationService.getUserLocale();

      const locDataLoaded = await localizationService.getLocalizedTextSet(
        [
          'about',
          'aboutdescription',
          'technology',
          'technologydescription',
          'reactjs',
          'reactjsdescription',
          'fluentui',
          'fluentuidescription',
          'createreactapp',
          'createreactappdescription',
          'moreinfo'
        ],
        locCode
      );
      setLocData(locDataLoaded);
    }
    loadLocalization();
  }, []);

  return (
    <Stack spacing={0}>
      <Stack.Item xs={12} className="contentpanel-site">
        <h3>{locData.about}</h3>

        <p>{locData.aboutdescription}</p>

        <h4>{locData.technology}</h4>

        <p>{locData.technologydescription}:</p>

        <Stack spacing={0}>
          <Stack.Item xs={12} md={3} lg={3} xl={3} className="card-row-column">
            <Card className="card white-bg-color bl-1 bb-1">
              <CardItem>
                <h4 className="card-title">{locData.reactjs}</h4>
                <p className="card-text">{locData.reactjsdecription}</p>
              </CardItem>
              <CardItem>
                <PrimaryButton
                  className="ml-2"
                  color="secondary"
                  href="https://facebook.github.io/react/index.html"
                  target="_blank"
                  rel="noopener"
                >
                  {locData.moreinfo}
                </PrimaryButton>
              </CardItem>
            </Card>
          </Stack.Item>
          <Stack.Item xs={12} md={3} lg={3} xl={3} className="card-row-column">
            <Card className="card white-bg-color bl-1 bb-1">
              <CardItem>
                <h4 className="card-title">{locData.fluentui}</h4>
                <p className="card-text">{locData.fluentuidescription}</p>
              </CardItem>
              <CardItem>
                <PrimaryButton
                  className="ml-2"
                  color="secondary"
                  href="https://material-ui.com/"
                  target="_blank"
                  rel="noopener"
                >
                  {locData.moreinfo}
                </PrimaryButton>
              </CardItem>
            </Card>
          </Stack.Item>
          <Stack.Item xs={12} md={3} lg={3} xl={3} className="card-row-column">
            <Card className="card white-bg-color bl-1 bb-1">
              <CardItem>
                <h4 className="card-title">{locData.createreactapp}</h4>
                <p className="card-text">{locData.createreactappdescription}</p>
              </CardItem>
              <CardItem>
                <PrimaryButton
                  className="ml-2"
                  color="secondary"
                  href="https://create-react-app.dev/"
                  target="_blank"
                  rel="noopener"
                >
                  {locData.moreinfo}
                </PrimaryButton>
              </CardItem>
            </Card>
          </Stack.Item>
        </Stack>
      </Stack.Item>
    </Stack>
  );
}

export default withRouter(About);
