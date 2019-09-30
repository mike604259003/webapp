import React from 'react';

export default class FooterComponent extends React.Component {
    render() {
        return (
            <footer>

                <div class="main_footer fix bg-mega text-center p-top-40 p-bottom-30 m-top-80">
                    <div class="col-md-12">
                        <p class="wow fadeInRight" data-wow-duration="1s">
                            Made with
                        <i class="fa fa-heart"></i>
                            by
                        <a target="_blank" href="http://bootstrapthemes.co">Bootstrap Themes</a>
                            2016. All Rights Reserved
                    </p>
                    </div>
                </div>
            </footer>
        )
    }
}