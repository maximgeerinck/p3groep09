package groep9.hogent.be.android.Joetz_Contacteren;

import android.app.Activity;
import android.app.FragmentManager;
import android.app.FragmentTransaction;
import android.os.Bundle;

import groep9.hogent.be.android.Menu.MenuFragment;
import groep9.hogent.be.android.R;

/**
 * Created by Dries on 30/10/2014.
 */
public class JoetzContacterenActivity extends Activity {
    private final String TITLE = "Joetz contacteren";

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.vakantie_weergeven_layout);

        FragmentManager fm = getFragmentManager();
        FragmentTransaction ft = getFragmentManager().beginTransaction();
        ft.add(R.id.vakantie_weergeven_menu, MenuFragment.newInstance(TITLE));
        ft.commit();
    }
}