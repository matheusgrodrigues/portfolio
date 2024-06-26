import React from 'react';

import renderer from 'react-test-renderer';

import ThemeProvider from '@/src/core/utils/theme-utils/theme-provider';

import { themeLight } from '@/src/config/theme/theme';

import Footer from '@/src/components/organisms/Footer';

import AppRouterContextProviderMock from '@/src/core/utils/test-utils/app-router-provider';

describe('Deve renderizar o OFooter corretamente', () => {
    const push = jest.fn();

    it('Deve preservar o visual do OHeader', () => {
        const three = renderer
            .create(
                <AppRouterContextProviderMock router={{ push }}>
                    <ThemeProvider theme={themeLight}>
                        <Footer />
                    </ThemeProvider>
                </AppRouterContextProviderMock>
            )
            .toJSON();

        expect(three).toMatchSnapshot();
    });
});
